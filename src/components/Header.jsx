import { useState } from 'react'

const Header = () => {
  const [open, setOpen] = useState(false)

  const links = [
    {
      label: 'Início',
      url: '/',
    },
    {
      label: 'Nossos serviços',
      url: '/services',
    },
    {
      label: 'Projetos',
      url: '/projects',
    },
    {
      label: 'Equipe',
      url: '/members',
    },
    {
      label: 'Identidade',
      url: '/brand',
    },
  ]

  return (
    <nav className='bg-darkBlue'>
      <div className='mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex-shrink-0 flex items-center'>
            <a
              href='/'
              className='text-white hover:text-blue font-SaoTorpes text-xl'>
              Revo
            </a>
          </div>
          <div className='hidden md:flex flex-1 justify-end'>
            <div className='ml-10 flex items-center space-x-4'>
              {links.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  className='text-gray-300 text-white hover:text-blue font-Montserrat'>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className='-mr-2 flex items-center md:hidden'>
            <button
              onClick={() => setOpen(!open)}
              type='button'
              className='bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-blue text-white hover:bg-gray-700'>
              <span className='sr-only'>Open main menu</span>
              <svg
                className={`${open ? 'hidden' : 'block'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
              <svg
                className={`${open ? 'block' : 'hidden'} h-6 w-6`}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${open ? 'block' : 'hidden'} md:hidden`}>
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {links.map((item) => (
            <a
              key={item.url}
              href={item.url}
              className='block text-white hover:text-blue font-Montserrat py-4 border-b-2 border-white'>
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Header
