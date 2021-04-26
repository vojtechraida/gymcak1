import Link from 'next/link'
import Button from './../components/Button'

const HomePage = () => {    
    return <div>
        Welcome to Next.js! Go to {" "}
        <Link href="/hello"><a>hello page</a></Link>.
        <Button color="red">Tohle je moje tlacitko</Button>
        <Button />
        <Button children="tohle je super tlacitko" onClick={()=>{console.log("ahoj")}} />
        {greeting("Petr")}
        {superGreeting({name: "super greeting name"})}
    </div>
}

export default HomePage

