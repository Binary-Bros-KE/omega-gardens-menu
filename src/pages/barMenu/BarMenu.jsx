import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronDown, Wine, Star, Clock, MapPin, GlassWater, Zap, Beer } from "lucide-react"
import { barMenu, searchItems } from "../../constants/barMenu"

export default function OmegaGardensBarMenu() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState({})
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [highlightedItem, setHighlightedItem] = useState(null)
  const categoryRefs = useRef({})

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchItems(searchQuery)
      setSearchResults(results)
      setShowSearchResults(true)
    } else {
      setShowSearchResults(false)
      setSearchResults([])
      setHighlightedItem(null)
    }
  }, [searchQuery])

  const toggleCategory = (categoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }))
  }

  const handleSearchItemClick = (item) => {
    // Close search results
    setShowSearchResults(false)
    setSearchQuery("")

    // Find the category key for this item
    const categoryKey = Object.keys(barMenu).find(key =>
      barMenu[key].title === item.category
    )

    if (categoryKey) {
      // Expand the category
      setExpandedCategories((prev) => ({
        ...prev,
        [categoryKey]: true,
      }))

      // Highlight the item
      setHighlightedItem(`${categoryKey}-${item.name}`)

      // Scroll to category after a brief delay
      setTimeout(() => {
        if (categoryRefs.current[categoryKey]) {
          categoryRefs.current[categoryKey].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          })
        }
      }, 300)

      // Remove highlight after 4 seconds
      setTimeout(() => {
        setHighlightedItem(null)
      }, 4000)
    }
  }

  const formatPrice = (price) => {
    if (typeof price === "object") {
      return Object.entries(price)
        .map(([size, amount]) => `${size.charAt(0).toUpperCase() + size.slice(1)}: ${amount}/=`)
        .join(" | ")
    }
    return `${price}/=`
  }

  const categories = Object.keys(barMenu)
  const filteredCategories =
    selectedCategory === "all" ? categories : categories.filter((cat) => cat === selectedCategory)

  const getBarIcon = (categoryKey) => {
    if (categoryKey.toLowerCase().includes('beer')) return Beer
    if (categoryKey.toLowerCase().includes('wine')) return Wine
    if (categoryKey.toLowerCase().includes('cocktail')) return GlassWater
    return Wine // Default icon
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[url('/bar-menu/shelf.jpg')] bg-cover bg-center text-white shadow-2xl"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center mb-4"
            >
              <Wine className="w-8 h-8 mr-3 text-amber-200" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent">
                Omega Gardens Bar
              </h1>
              <GlassWater className="w-8 h-8 ml-3 text-amber-200" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-light text-amber-100 mb-2"
            >
              Premium Spirits & Craft Beverages
            </motion.p>
          </div>
        </div>
      </motion.header>



      {/* Search Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for drinks, brands, or categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-amber-200 rounded-2xl focus:border-amber-500 focus:outline-none bg-white shadow-lg transition-all duration-300 placeholder-amber-400"
            />
          </div>

          {/* Search Results */}
          <AnimatePresence>
            {showSearchResults && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 bg-white border-2 border-amber-200 rounded-2xl mt-2 shadow-2xl z-50 max-h-96 overflow-y-auto"
              >
                {searchResults.length > 0 ? (
                  <div className="p-4">
                    <p className="text-amber-700 font-semibold mb-3">
                      Found {searchResults.length} result{searchResults.length !== 1 ? "s" : ""}
                    </p>
                    {searchResults.map((item, index) => (
                      <motion.div
                        key={`${item.category}-${item.name}-${index}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-amber-100 last:border-b-0 py-3 cursor-pointer hover:bg-amber-50 transition-colors duration-200 rounded-lg px-2"
                        onClick={() => handleSearchItemClick(item)}
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            {item.description && (
                              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            )}
                            <p className="text-xs text-amber-600 mt-1">
                              {item.category} {item.subcategory && `• ${item.subcategory}`}
                            </p>
                          </div>
                          <div className="text-amber-700 font-bold ml-4">{formatPrice(item.price)}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 text-center text-gray-500">No items found matching "{searchQuery}"</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mt-8"
        >
          <button
            onClick={() => setSelectedCategory("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === "all"
                ? "bg-amber-600 text-white shadow-lg"
                : "bg-white text-amber-600 border border-amber-200 hover:bg-amber-50"
              }`}
          >
            All Categories
          </button>
          {categories.map((categoryKey) => (
            <button
              key={categoryKey}
              onClick={() => {
                // Set the category filter
                setSelectedCategory(categoryKey)

                // Expand the specific category
                setExpandedCategories((prev) => ({
                  ...prev,
                  [categoryKey]: true,
                }))

                // Scroll to the category after a brief delay
                setTimeout(() => {
                  if (categoryRefs.current[categoryKey]) {
                    categoryRefs.current[categoryKey].scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                      inline: 'nearest'
                    })
                  }
                }, 200)
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${selectedCategory === categoryKey
                  ? "bg-amber-600 text-white shadow-lg"
                  : "bg-white text-amber-600 border border-amber-200 hover:bg-amber-50"
                }`}
            >
              {barMenu[categoryKey].title}
            </button>
          ))}
        </motion.div>
      </motion.section>

      {/* Menu Categories - All categories are collapsed by default */}
      <main className="container mx-auto px-4 pb-12">
        <div className="space-y-8">
          {filteredCategories.map((categoryKey, categoryIndex) => {
            const category = barMenu[categoryKey]
            const isExpanded = expandedCategories[categoryKey]
            const IconComponent = getBarIcon(categoryKey)

            return (
              <motion.div
                key={categoryKey}
                ref={(el) => (categoryRefs.current[categoryKey] = el)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl shadow-xl overflow-hidden border border-amber-100"
              >
                {/* Category Header */}
                <div className="relative cursor-pointer" onClick={() => toggleCategory(categoryKey)}>
                  <div className="h-48 md:h-64 overflow-hidden relative">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <IconComponent className="w-8 h-8 mr-3 text-amber-200" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/20 backdrop-blur-sm rounded-full p-2"
                      >
                        <ChevronDown className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Category Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-2 bg-gradient-to-br from-amber-50 to-orange-50">
                        {/* Direct Items */}
                        {category.items && (
                          <div className="grid gap-3">
                            {category.items.map((item, itemIndex) => {
                              const itemKey = `${categoryKey}-${item.name}`
                              const isHighlighted = highlightedItem === itemKey

                              return (
                                <motion.div
                                  key={itemIndex}
                                  initial={{ opacity: 0, x: -30 }}
                                  animate={{
                                    opacity: 1,
                                    x: 0,
                                    backgroundColor: isHighlighted ? "#FEF3C7" : "#FFFFFF",
                                    scale: isHighlighted ? 1.02 : 1
                                  }}
                                  transition={{
                                    delay: itemIndex * 0.05,
                                    backgroundColor: { duration: 0.3 },
                                    scale: { duration: 0.3 }
                                  }}
                                  className={`bg-white rounded-md p-2 py-4 shadow-lg border-2 hover:shadow-xl transition-all duration-300 ${isHighlighted
                                      ? "border-amber-400 shadow-amber-200"
                                      : "border-amber-100 hover:border-amber-200"
                                    }`}
                                >
                                  <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                      <h3 className="text-sm font-semibold text-gray-800 mb-2">{item.name}</h3>
                                      {item.description && (
                                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                      )}
                                    </div>
                                    <div className="ml-6 text-right">
                                      <div className="text-xl font-semibold text-amber-700">{formatPrice(item.price)}</div>
                                    </div>
                                  </div>
                                </motion.div>
                              )
                            })}
                          </div>
                        )}

                        {/* Subcategories */}
                        {category.subcategories && (
                          <div className="space-y-8">
                            {Object.entries(category.subcategories).map(([subKey, subcategory], subIndex) => (
                              <motion.div
                                key={subKey}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: subIndex * 0.1 }}
                                className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6"
                              >
                                <h3 className="text-2xl font-bold text-amber-800 mb-6 border-b-2 border-amber-200 pb-2">
                                  {subcategory.title}
                                </h3>
                                <div className="grid gap-4">
                                  {subcategory.items.map((item, itemIndex) => {
                                    const itemKey = `${categoryKey}-${subKey}-${item.name}`
                                    const isHighlighted = highlightedItem === itemKey

                                    return (
                                      <motion.div
                                        key={itemIndex}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{
                                          opacity: 1,
                                          x: 0,
                                          backgroundColor: isHighlighted ? "#FEF3C7" : "#FFFFFF",
                                          scale: isHighlighted ? 1.02 : 1
                                        }}
                                        transition={{
                                          delay: itemIndex * 0.05,
                                          backgroundColor: { duration: 0.3 },
                                          scale: { duration: 0.3 }
                                        }}
                                        className={`bg-white rounded-xl p-5 shadow-md border-2 hover:shadow-lg transition-all duration-300 ${isHighlighted
                                            ? "border-amber-400 shadow-amber-200"
                                            : "border-amber-100 hover:border-amber-200"
                                          }`}
                                      >
                                        <div className="flex justify-between items-start">
                                          <div className="flex-1">
                                            <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h4>
                                            {item.description && (
                                              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                            )}
                                          </div>
                                          <div className="ml-4 text-right">
                                            <div className="text-xl font-bold text-amber-700">
                                              {formatPrice(item.price)}
                                            </div>
                                          </div>
                                        </div>
                                      </motion.div>
                                    )
                                  })}
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </main>
    </div>
  )
}