'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const findings = [
  {
    id: 'nodule',
    name: 'Pulmonary Nodule',
    description: 'The model focused on this area due to its distinct density and rounded morphology, consistent with a nodule.',
    confidence: '94%',
    position: { top: '35%', left: '60%', width: '80px', height: '80px' },
    color: 'from-yellow-400/20 to-red-500/80'
  },
  {
    id: 'cardiomegaly',
    name: 'Cardiomegaly',
    description: 'Enlarged cardiac silhouette detected through comparative analysis of cardiothoracic ratio.',
    confidence: '87%',
    position: { top: '45%', left: '35%', width: '120px', height: '140px' },
    color: 'from-blue-400/20 to-red-500/80'
  },
  {
    id: 'pleural',
    name: 'Pleural Effusion',
    description: 'Increased opacity in costophrenic angle consistent with fluid accumulation.',
    confidence: '76%',
    position: { top: '70%', left: '25%', width: '100px', height: '60px' },
    color: 'from-green-400/20 to-red-500/80'
  }
]

export function InteractiveXAIDemo() {
  const [activeFinding, setActiveFinding] = useState(null)
  const [hoveredFinding, setHoveredFinding] = useState(null)

  const handleFindingHover = (findingId) => {
    setHoveredFinding(findingId)
  }

  const handleFindingClick = (findingId) => {
    setActiveFinding(activeFinding === findingId ? null : findingId)
  }

  const currentFinding = activeFinding || hoveredFinding
  const findingData = findings.find(f => f.id === currentFinding)

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold tracking-tight mb-4">
          See Through the <span className="text-secondary">Black Box</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Experience explainable AI in action. Hover or click on the findings below to see exactly 
          where and why our AI identifies potential pathologies.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start">
        {/* X-ray Display */}
        <div className="relative">
          <Card className="p-6 bg-black">
            <div className="xray-container relative mx-auto" style={{ maxWidth: '400px' }}>
              <img
                src="https://images.unsplash.com/photo-1631651363531-fd29aec4cb5c"
                alt="Chest X-ray for AI analysis demonstration"
                className="w-full h-auto rounded-lg"
                style={{ filter: 'invert(1) contrast(1.2)' }}
              />
              
              {/* Heatmap Overlays */}
              <AnimatePresence>
                {findingData && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute rounded-full bg-gradient-radial ${findingData.color} pointer-events-none`}
                    style={{
                      top: findingData.position.top,
                      left: findingData.position.left,
                      width: findingData.position.width,
                      height: findingData.position.height,
                      transform: 'translate(-50%, -50%)',
                      filter: 'blur(8px)',
                    }}
                  />
                )}
              </AnimatePresence>
              
              {/* Finding Markers */}
              {findings.map((finding) => (
                <div
                  key={finding.id}
                  className="absolute w-3 h-3 bg-secondary rounded-full border-2 border-white shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-125 transition-transform"
                  style={{
                    top: finding.position.top,
                    left: finding.position.left,
                  }}
                  onClick={() => handleFindingClick(finding.id)}
                />
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <p className="text-sm text-white/60">
                Interactive Medical Imaging • AI-Powered Analysis
              </p>
            </div>
          </Card>
        </div>

        {/* Controls and Explanation */}
        <div className="space-y-6">
          <div className="grid gap-3">
            {findings.map((finding) => (
              <Button
                key={finding.id}
                variant={currentFinding === finding.id ? "default" : "outline"}
                className="finding-button justify-between h-auto p-4 text-left"
                onMouseEnter={() => handleFindingHover(finding.id)}
                onMouseLeave={() => setHoveredFinding(null)}
                onClick={() => handleFindingClick(finding.id)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-secondary rounded-full" />
                  <span className="font-medium">{finding.name}</span>
                </div>
                <Badge variant="secondary">{finding.confidence}</Badge>
              </Button>
            ))}
          </div>

          {/* Explanation Panel */}
          <AnimatePresence mode="wait">
            {findingData && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="p-6 border-secondary/20 bg-secondary/5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-3 h-3 bg-secondary rounded-full mt-2" />
                    <div>
                      <h3 className="font-semibold text-lg">{findingData.name}</h3>
                      <Badge variant="outline" className="mt-1">
                        Confidence: {findingData.confidence}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {findingData.description}
                  </p>
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <p className="text-sm font-medium">How XAI Works:</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Our explainable AI uses Grad-CAM visualization to highlight the exact regions 
                      that influenced the model's decision, providing transparency in diagnostic reasoning.
                    </p>
                  </div>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {!findingData && (
            <Card className="p-6 border-dashed">
              <p className="text-muted-foreground text-center">
                👆 Hover or click on any finding above to see the AI's reasoning process
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}