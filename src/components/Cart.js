import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import ScrollToTop from "./ScrollToTop"

const Cart = () => {

    const dispatch = useDispatch()
    const cartItems = useSelector((store) => store.cart.items)
    console.log(cartItems)

    // Calculate total
    const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0)
    const deliveryFee = 49
    const gstAmount = Math.round(totalAmount * 0.18)
    const finalTotal = totalAmount + deliveryFee + gstAmount

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <ScrollToTop />
                <div className="max-w-4xl mx-auto px-4">
                    <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Your cart is empty</h2>
                        <p className="text-gray-600">Add some delicious items to get started!</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">Your Cart</h1>
                    <p className="text-gray-600 mt-1">{cartItems.length} item{cartItems.length > 1 ? 's' : ''} in your cart</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                            {cartItems.map((item, index) => (
                                <div key={item.id + index} className="p-6 border-b border-gray-100 last:border-b-0">
                                    <div className="flex items-start gap-4">
                                        {/* Item Image Placeholder */}
                                        <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center">
                                            <span className="text-gray-500 text-sm">IMG</span>
                                        </div>

                                        {/* Item Details */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between mb-2">
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-gray-800 text-lg mb-1">{item.name}</h3>

                                                    {/* Veg/Non-veg indicator */}
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <div className={`w-4 h-4 border-2 flex items-center justify-center ${item.itemAttribute?.vegClassifier === "VEG"
                                                                ? "border-green-600"
                                                                : "border-red-600"
                                                            }`}>
                                                            <div className={`w-2 h-2 rounded-full ${item.itemAttribute?.vegClassifier === "VEG"
                                                                    ? "bg-green-600"
                                                                    : "bg-red-600"
                                                                }`}></div>
                                                        </div>
                                                        <span className={`text-xs font-medium ${item.itemAttribute?.vegClassifier === "VEG"
                                                                ? "text-green-600"
                                                                : "text-red-600"
                                                            }`}>
                                                            {item.itemAttribute?.vegClassifier}
                                                        </span>
                                                        {item.type && (
                                                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                                {item.type}
                                                            </span>
                                                        )}
                                                    </div>

                                                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>

                                                    <div className="flex items-center justify-between">
                                                        <span className="text-xl font-bold text-gray-800">
                                                            ₹{(item.price / 100).toFixed(2)}
                                                        </span>

                                                        {/* Quantity Controls */}
                                                        <div className="flex items-center gap-3">
                                                            <div className="flex items-center border border-gray-300 rounded-lg">
                                                                <button className="p-2 hover:bg-gray-50 transition-colors">
                                                                    <Minus className="w-4 h-4 text-gray-600" />
                                                                </button>
                                                                <span className="px-3 py-1 text-gray-800 font-medium">
                                                                    {item.quantity || 1}
                                                                </span>
                                                                <button className="p-2 hover:bg-gray-50 transition-colors">
                                                                    <Plus className="w-4 h-4 text-gray-600" />
                                                                </button>
                                                            </div>

                                                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                                                                <Trash2 className="w-4 h-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>

                            <div className="space-y-3 mb-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>₹{(totalAmount / 100).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Delivery Fee</span>
                                    <span>₹{(deliveryFee / 100).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>GST (18%)</span>
                                    <span>₹{(gstAmount / 100).toFixed(2)}</span>
                                </div>
                                <hr className="my-3" />
                                <div className="flex justify-between text-lg font-bold text-gray-800">
                                    <span>Total</span>
                                    <span>₹{(finalTotal / 100).toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-3">
                                Proceed to Checkout
                            </button>

                            <div className="text-center">
                                <button className="text-orange-500 font-medium hover:underline">
                                    Continue Shopping
                                </button>
                            </div>

                            {/* Delivery Info */}
                            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                                <h4 className="font-medium text-gray-800 mb-2">Delivery Info</h4>
                                <div className="text-sm text-gray-600 space-y-1">
                                    <p>📍 Delivery in 30-40 mins</p>
                                    <p>🛡️ Safe & contactless delivery</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
