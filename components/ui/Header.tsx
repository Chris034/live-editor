import Image from 'next/image'

const Header = () => {
    return (
        <header className="flex flex-row justify-between mx-28 my-20">
            <div className="flex flex-row space-x-4">
            <Image 
                    src="/assets/icons/logo.svg"
                    alt="Logo"
                    width={48}
                    height={32}
                    className="md:block"
                />
                <h1 className='text-4xl'>LiveDocs</h1>
            </div>
            <div className="flex flex-row space-x-12">
                <Image 
                    src="/assets/icons/bell.svg"
                    alt="Logo with name"
                    width={32}
                    height={32}
                    className="hidden md:block"
                />
                <Image 
                    src="/assets/icons/bell.svg"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="hidden md:block"
                />  
           </div>
        </header>
    )
}

export default Header;