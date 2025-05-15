import Link from 'next/link'

export default function Menubar() {
    return (
      <>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <a href='https://expense-psi-seven.vercel.app/' target='_blank'>Midterm Part I - Expense</a>
          </li>
          <li>
            <a href='https://exam-1-part-2-kappa.vercel.app/' target='_blank'>Midterm Part II Site</a>
          </li>
          <li>
            <Link href='/faq'>FAQ</Link>
          </li>
        </ul>
      </>
    )
  }
