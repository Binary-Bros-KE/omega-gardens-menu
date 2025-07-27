import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronDown, Utensils, Star, Clock, MapPin } from "lucide-react"
import { menuData, searchItems } from "../../../constants/menus"

export default function OmegaGardensMenu() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [expandedCategories, setExpandedCategories] = useState({})
  const [selectedCategory, setSelectedCategory] = useState("all")

  useEffect(() => {
    if (searchQuery.trim()) {
      const results = searchItems(searchQuery)
      setSearchResults(results)
      setShowSearchResults(true)
    } else {
      setShowSearchResults(false)
      setSearchResults([])
    }
  }, [searchQuery])

  const toggleCategory = (categoryKey) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryKey]: !prev[categoryKey],
    }))
  }

  const formatPrice = (price) => {
    if (typeof price === "object") {
      return `Large: ${price.large}/= | Medium: ${price.medium}/= | Small: ${price.small}/=`
    }
    return `${price}/=`
  }

  const categories = Object.keys(menuData)
  const filteredCategories =
    selectedCategory === "all" ? categories : categories.filter((cat) => cat === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white shadow-2xl"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center mb-4"
            >
              <Utensils className="w-8 h-8 mr-3 text-green-200" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                Omega Gardens
              </h1>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl font-light text-green-100 mb-2"
            >
              Hotel & Spa Restaurant
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
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-600 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for dishes, categories, or ingredients..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-green-200 rounded-2xl focus:border-green-500 focus:outline-none bg-white shadow-lg transition-all duration-300"
            />
          </div>

          {/* Search Results */}
          <AnimatePresence>
            {showSearchResults && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full left-0 right-0 bg-white border-2 border-green-200 rounded-2xl mt-2 shadow-2xl z-50 max-h-96 overflow-y-auto"
              >
                {searchResults.length > 0 ? (
                  <div className="p-4">
                    <p className="text-green-700 font-semibold mb-3">
                      Found {searchResults.length} result{searchResults.length !== 1 ? "s" : ""}
                    </p>
                    {searchResults.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-green-100 last:border-b-0 py-3"
                      >
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800">{item.name}</h4>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            <p className="text-xs text-green-600 mt-1">
                              {item.category} {item.subcategory && `• ${item.subcategory}`}
                            </p>
                          </div>
                          <div className="text-green-700 font-bold ml-4">{formatPrice(item.price)}</div>
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
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === "all"
                ? "bg-green-600 text-white shadow-lg"
                : "bg-white text-green-600 border border-green-200 hover:bg-green-50"
            }`}
          >
            All Categories
          </button>
          {categories.map((categoryKey) => (
            <button
              key={categoryKey}
              onClick={() => setSelectedCategory(categoryKey)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === categoryKey
                  ? "bg-green-600 text-white shadow-lg"
                  : "bg-white text-green-600 border border-green-200 hover:bg-green-50"
              }`}
            >
              {menuData[categoryKey].title}
            </button>
          ))}
        </motion.div>
      </motion.section>

      {/* Menu Categories */}
      <main className="container mx-auto px-4 pb-12">
        <div className="space-y-8">
          {filteredCategories.map((categoryKey, categoryIndex) => {
            const category = menuData[categoryKey]
            const isExpanded = expandedCategories[categoryKey]

            return (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden border border-green-100"
              >
                {/* Category Header */}
                <div className="relative cursor-pointer" onClick={() => toggleCategory(categoryKey)}>
                  <div className="h-48 md:h-64 overflow-hidden">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">{category.title}</h2>
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
                      <div className="p-2 bg-gradient-to-br from-green-50 to-white">
                        {/* Direct Items */}
                        {category.items && (
                          <div className="grid gap-4">
                            {category.items.map((item, itemIndex) => (
                              <motion.div
                                key={itemIndex}
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: itemIndex * 0.05 }}
                                className="bg-white rounded-2xl p-4 shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300 hover:border-green-200"
                              >
                                <div className="flex justify-between items-start">
                                  <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                  </div>
                                  <div className="ml-6 text-right">
                                    <div className="text-2xl font-bold text-green-700">{formatPrice(item.price)}</div>
                                  </div>
                                </div>
                              </motion.div>
                            ))}
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
                                className="bg-gradient-to-r from-green-100 to-green-50 rounded-2xl p-4"
                              >
                                <h3 className="text-2xl font-bold text-green-800 mb-6 border-b-2 border-green-200 pb-2">
                                  {subcategory.title}
                                </h3>
                                <div className="grid gap-4">
                                  {subcategory.items.map((item, itemIndex) => (
                                    <motion.div
                                      key={itemIndex}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: itemIndex * 0.05 }}
                                      className="bg-white rounded-xl p-5 shadow-md border border-green-100 hover:shadow-lg transition-all duration-300"
                                    >
                                      <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                          <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.name}</h4>
                                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                        <div className="ml-4 text-right">
                                          <div className="text-xl font-bold text-green-700">
                                            {formatPrice(item.price)}
                                          </div>
                                        </div>
                                      </div>
                                    </motion.div>
                                  ))}
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

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-gradient-to-r from-green-800 via-green-700 to-green-800 text-white py-8"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Utensils className="w-6 h-6 mr-2 text-green-200" />
            <h3 className="text-2xl font-bold">Omega Gardens Hotel & Spa</h3>
          </div>
          <p className="text-green-200 mb-4">Experience culinary excellence in a serene environment</p>
          <div className="flex items-center justify-center space-x-6 text-sm text-green-300">
            <span>Premium Dining</span>
            <span>•</span>
            <span>Fresh Ingredients</span>
            <span>•</span>
            <span>Exceptional Service</span>
          </div>
          <div className="mt-6 pt-4 border-t border-green-600 text-green-300 text-sm">
            <p>Scan QR code at your table for easy ordering</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
