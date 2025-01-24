import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <>
   <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
   <div className="mx-auto justify-center flex py-10">
   <Image
          className="dark:invert"
          src="/log-in.png"
          alt="png"
          width={300}
          height={300}
          priority
        />
   </div>
   <div className="text-center py-2">
    <h1 className="font-bold text-3xl">PassManager</h1>
    
    <p className="py-4">You can directly save your password to our database and can access when ever you want </p>
   
   <Link href="login"><button className="border-2 p-2 rounded-md my-10 bg-blue-200">Get Started</button> </Link>
   </div>
   </>
  );
}


