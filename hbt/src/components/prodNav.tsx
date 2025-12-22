import Link from "next/link";

export default function ProdNav() {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="bg-[#373737] px-8 py-3 flex items-center justify-between">
          {/* Left side - Navigation links */}
          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-white font-semibold uppercase hover:text-gray-200 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/resources"
              className="text-white font-semibold uppercase hover:text-gray-200 transition-colors"
            >
              Resources
            </Link>
            <Link
              href="/about"
              className="text-white font-semibold uppercase hover:text-gray-200 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white font-semibold uppercase hover:text-gray-200 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Right side - Action buttons */}
          <div className="flex items-center gap-4">
            <Link
              href="/quote"
              className="bg-white text-gray-700 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/apply"
              className="bg-white text-gray-700 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              Drive with Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
