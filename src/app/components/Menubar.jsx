import Link from 'next/link'

export default function Menubar() {
  return (
    <nav className="bg-pink-200 min-h-screen flex flex-col items-center p-6 font-sans">
      <ul className="bg-white rounded-lg shadow-md max-w-md w-full p-6 space-y-4 text-gray-800">
        <li>
          <Link href="/" className="block py-2 px-4 rounded hover:bg-pink-300 font-semibold text-center">
            Home
          </Link>
        </li>
        <li>
          <a
            href="https://expense-psi-seven.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 px-4 rounded hover:bg-pink-300 font-semibold text-center"
          >
            Midterm Part I - Expense
          </a>
        </li>
        <li>
          <a
            href="https://exam-1-part-2-kappa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 px-4 rounded hover:bg-pink-300 font-semibold text-center"
          >
            Midterm Part II Site
          </a>
        </li>
        <li>
          <Link href="/faq" className="block py-2 px-4 rounded hover:bg-pink-300 font-semibold text-center">
            FAQ
          </Link>
        </li>
      </ul>
    </nav>
  )
}
