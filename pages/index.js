import Link from 'next/link'
import Button from './../components/Button'

const HomePage = () => {    
    return <div>
        Welcome to Next.js! Go to {" "}
        <Link href="/hello"><a>hello page</a></Link>.
        <Button color="red">Tohle je moje tlacitko</Button>
        <Button />
        <Button children="tohle je super tlacitko" />
    </div>

}

export default HomePage

