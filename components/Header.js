import Link from 'next/link';

const Header = () =>{
  return(
    <div>
      <Link href= ''>
        <a> Home </a>
      </Link>
      <Link href= '/about'>
        <a> About </a>
      </Link>
      <Link href= '/login'>
        <img src={require('../imagefile/loginimage.jpg')}/>
      </Link>
    </div>
  )
}

export default Header;
