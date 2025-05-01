"use client"
import * as pdfjsLib from 'pdfjs-dist';
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize,
  Download,
  Printer,
  MoreVertical,
  FileText,
  Search,
  RotateCw,
  X,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Import PDF.js dynamically to avoid SSR issues
import dynamic from "next/dynamic"

// We'll use a dynamic import for the PDF.js worker
// In a real app, you would need to set up the PDF.js worker properly
// const PDFJSWorker = dynamic(() => import("pdfjs-dist/build/pdf.worker.entry"), { ssr: false })

interface PDFViewerProps {
  pdfUrl: string
  title: string
}

export function PDFViewer({ pdfUrl, title }: PDFViewerProps) {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [zoom, setZoom] = useState(100)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [currentSearchIndex, setCurrentSearchIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const viewerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const pdfDocRef = useRef<any>(null)
  const pdfPageRef = useRef<any>(null)

  // Load the PDF document
  useEffect(() => {
    let isMounted = true

    const loadPDF = async () => {
      try {
        setIsLoading(true)

        // In a real implementation, you would use the PDF.js library
        // Here's how you would typically load a PDF with PDF.js:
        /*
        const pdfjsLib = await import('pdfjs-dist')
        pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJSWorker
        
        const loadingTask = pdfjsLib.getDocument(pdfUrl)
        const pdfDoc = await loadingTask.promise
        
        if (isMounted) {
          pdfDocRef.current = pdfDoc
          setTotalPages(pdfDoc.numPages)
          renderPage(1)
        }
        */

        // For this mock implementation, we'll simulate loading a PDF
        setTimeout(() => {
          if (isMounted) {
            setTotalPages(10) // Mock value
            setIsLoading(false)
          }
        }, 1000)
      } catch (err) {
        if (isMounted) {
          console.error("Error loading PDF:", err)
          setError("Failed to load PDF. Please try again later.")
          setIsLoading(false)
        }
      }
    }

    loadPDF()

    return () => {
      isMounted = false
    }
  }, [pdfUrl])

  // Render the PDF page
  const renderPage = async (pageNum: number) => {
    if (!pdfDocRef.current) return

    try {
      setIsLoading(true)

      // In a real implementation with PDF.js:
      /*
      if (pdfPageRef.current) {
        pdfPageRef.current.cleanup()
      }
      
      const page = await pdfDocRef.current.getPage(pageNum)
      pdfPageRef.current = page
      
      const canvas = canvasRef.current
      if (!canvas) return
      
      const viewport = page.getViewport({ scale: zoom / 100, rotation })
      canvas.height = viewport.height
      canvas.width = viewport.width
      
      const renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport: viewport
      }
      
      await page.render(renderContext).promise
      */

      // For this mock implementation, we'll just update the state
      setCurrentPage(pageNum)
      setIsLoading(false)
    } catch (err) {
      console.error("Error rendering page:", err)
      setError("Failed to render page. Please try again.")
      setIsLoading(false)
    }
  }

  // Navigation functions
  const nextPage = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1
      setCurrentPage(newPage)
      renderPage(newPage)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1
      setCurrentPage(newPage)
      renderPage(newPage)
    }
  }

  // Zoom functions
  const zoomIn = () => {
    const newZoom = Math.min(zoom + 10, 200)
    setZoom(newZoom)
    if (pdfPageRef.current) {
      renderPage(currentPage)
    }
  }

  const zoomOut = () => {
    const newZoom = Math.max(zoom - 10, 50)
    setZoom(newZoom)
    if (pdfPageRef.current) {
      renderPage(currentPage)
    }
  }

  // Handle zoom slider change
  const handleZoomChange = (value: number[]) => {
    const newZoom = value[0]
    setZoom(newZoom)
    if (pdfPageRef.current) {
      renderPage(currentPage)
    }
  }

  // Rotation function
  const rotateClockwise = () => {
    const newRotation = (rotation + 90) % 360
    setRotation(newRotation)
    if (pdfPageRef.current) {
      renderPage(currentPage)
    }
  }

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (viewerRef.current?.requestFullscreen) {
        viewerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }
  }

  // Search functions
  const handleSearch = async () => {
    if (!searchQuery.trim() || !pdfDocRef.current) return

    // In a real implementation with PDF.js:
    /*
    const results = []
    
    for (let i = 1; i <= pdfDocRef.current.numPages; i++) {
      const page = await pdfDocRef.current.getPage(i)
      const textContent = await page.getTextContent()
      const text = textContent.items.map((item: any) => item.str).join(' ')
      
      if (text.toLowerCase().includes(searchQuery.toLowerCase())) {
        results.push({ page: i, text })
      }
    }
    
    setSearchResults(results)
    if (results.length > 0) {
      setCurrentSearchIndex(0)
      setCurrentPage(results[0].page)
      renderPage(results[0].page)
    }
    */

    // Mock search results
    const mockResults = [
      { page: 2, text: "Found match on page 2" },
      { page: 5, text: "Found match on page 5" },
      { page: 7, text: "Found match on page 7" },
    ]

    setSearchResults(mockResults)
    if (mockResults.length > 0) {
      setCurrentSearchIndex(0)
      setCurrentPage(mockResults[0].page)
    }
  }

  const navigateSearchResult = (direction: "next" | "prev") => {
    if (searchResults.length === 0) return

    let newIndex
    if (direction === "next") {
      newIndex = (currentSearchIndex + 1) % searchResults.length
    } else {
      newIndex = (currentSearchIndex - 1 + searchResults.length) % searchResults.length
    }

    setCurrentSearchIndex(newIndex)
    setCurrentPage(searchResults[newIndex].page)
    renderPage(searchResults[newIndex].page)
  }

  // Handle fullscreen change
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange)
    }
  }, [])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        nextPage()
      } else if (e.key === "ArrowLeft") {
        prevPage()
      } else if (e.key === "+" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        zoomIn()
      } else if (e.key === "-" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        zoomOut()
      } else if (e.key === "f" && (e.ctrlKey || e.metaKey)) {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [currentPage, totalPages, zoom])

  return (
    <div ref={viewerRef} className="flex flex-col h-[80vh]">
      {/* Toolbar */}
      <div className="flex items-center justify-between bg-red-100 dark:bg-red-900/70 p-3 border-b border-red-200 dark:border-red-800">
        <div className="flex items-center">
          <FileText className="w-5 h-5 mr-2 text-gray-600 dark:text-gray-400" />
          <span className="text-sm font-medium truncate max-w-[300px]">{title}</span>
        </div>

        <div className="flex items-center space-x-1">
          {/* Page Navigation */}
          <div className="flex items-center bg-white dark:bg-red-900/30 rounded-md px-2 py-1 mr-2 border border-red-100 dark:border-red-800">
            <input
              type="text"
              value={currentPage}
              onChange={(e) => {
                const page = Number.parseInt(e.target.value)
                if (!isNaN(page) && page > 0 && page <= totalPages) {
                  setCurrentPage(page)
                  renderPage(page)
                }
              }}
              className="w-8 bg-transparent text-center text-sm"
            />
            <span className="text-gray-600 dark:text-gray-400 text-sm">/</span>
            <span className="text-gray-600 dark:text-gray-400 text-sm">{totalPages}</span>
          </div>

          <Button variant="ghost" size="icon" onClick={prevPage} disabled={currentPage === 1 || isLoading}>
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={nextPage} disabled={currentPage === totalPages || isLoading}>
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Zoom Controls */}
          <Button variant="ghost" size="icon" onClick={zoomOut} disabled={zoom <= 50 || isLoading}>
            <ZoomOut className="h-4 w-4" />
          </Button>

          <div className="hidden md:flex items-center space-x-2 mx-2">
            <span className="text-xs text-gray-600 dark:text-gray-400">{zoom}%</span>
            <Slider
              value={[zoom]}
              min={50}
              max={200}
              step={10}
              onValueChange={handleZoomChange}
              disabled={isLoading}
              className="w-24"
            />
          </div>

          <div className="md:hidden text-sm text-gray-600 dark:text-gray-400 min-w-[40px] text-center">{zoom}%</div>

          <Button variant="ghost" size="icon" onClick={zoomIn} disabled={zoom >= 200 || isLoading}>
            <ZoomIn className="h-4 w-4" />
          </Button>

          {/* Additional Controls */}
          <Button variant="ghost" size="icon" onClick={rotateClockwise} disabled={isLoading}>
            <RotateCw className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)} disabled={isLoading}>
            <Search className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" onClick={toggleFullscreen} disabled={isLoading}>
            <Maximize className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" disabled={isLoading}>
            <Download className="h-4 w-4" />
          </Button>

          <Button variant="ghost" size="icon" disabled={isLoading}>
            <Printer className="h-4 w-4" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white dark:bg-red-900 border-red-200 dark:border-red-800 text-gray-900 dark:text-white"
            >
              <DropdownMenuItem className="hover:bg-red-50 dark:hover:bg-red-800/70 cursor-pointer">
                Save to Favorites
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-red-50 dark:hover:bg-red-800/70 cursor-pointer">
                Report Issue
              </DropdownMenuItem>
              <DropdownMenuItem className="hover:bg-red-50 dark:hover:bg-red-800/70 cursor-pointer">
                Share PDF
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="flex items-center bg-red-100 dark:bg-red-900/70 p-2 border-b border-red-200 dark:border-red-800">
          <Input
            type="text"
            placeholder="Search in document..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-white dark:bg-red-900/30 border-red-200 dark:border-red-800 text-gray-900 dark:text-white h-8 mr-2"
          />
          <Button
            size="sm"
            onClick={handleSearch}
            disabled={isLoading || !searchQuery.trim()}
            className="bg-red-600 hover:bg-red-700 text-white"
          >
            Search
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
            <X className="h-4 w-4" />
          </Button>

          {searchResults.length > 0 && (
            <div className="flex items-center ml-2">
              <span className="text-xs text-gray-600 dark:text-gray-400 mr-2">
                {currentSearchIndex + 1} of {searchResults.length}
              </span>
              <Button variant="ghost" size="icon" onClick={() => navigateSearchResult("prev")} className="h-6 w-6">
                <ChevronLeft className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => navigateSearchResult("next")} className="h-6 w-6">
                <ChevronRight className="h-3 w-3" />
              </Button>
            </div>
          )}
        </div>
      )}

      {/* PDF Content */}
      <div className="flex-1 bg-gray-100 dark:bg-red-950 overflow-auto flex items-center justify-center">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600 mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Loading PDF...</p>
          </div>
        ) : error ? (
          <div className="text-center p-8">
            <div className="text-red-600 mb-4">{error}</div>
            <Button onClick={() => window.location.reload()} className="bg-red-600 hover:bg-red-700 text-white">
              Try Again
            </Button>
          </div>
        ) : (
          <div
            className="bg-white mx-auto my-4 shadow-lg"
            style={{
              width: `${(8.5 * zoom) / 100}in`,
              height: `${(11 * zoom) / 100}in`,
              transform: `scale(${zoom / 100}) rotate(${rotation}deg)`,
              transformOrigin: "center center",
            }}
          >
            {/* Canvas for PDF rendering */}
            <canvas ref={canvasRef} className="w-full h-full" />

            {/* Fallback content when canvas is not supported or for mock implementation */}
            <div className="w-full h-full flex items-center justify-center text-black p-8">
              <div className="text-center">
                <h2 className="text-xl font-bold mb-4">Sample PDF Content - Page {currentPage}</h2>
                <p className="mb-2">This is a placeholder for the actual PDF content.</p>
                <p className="mb-4">In a real implementation, the PDF would be rendered here using PDF.js.</p>
                <div className="border border-red-200 p-4 rounded">
                  <p className="font-semibold">Question Paper Details:</p>
                  <p>{title}</p>
                  <p>
                    Page {currentPage} of {totalPages}
                  </p>
                  <p>Zoom: {zoom}%</p>
                  <p>Rotation: {rotation}°</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
