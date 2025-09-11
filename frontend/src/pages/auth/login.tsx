import { Asterisk } from "lucide-react";
import { useState } from "react";

function Login() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div
            className="flex flex-col justify-between h-full py-16 items-center gap-2 w-full"
        >
            {
                !isLogin ? (
                    <>
                        <Asterisk 
                            size={512}
                            className="text-[var(--contrast-color)]"
                        />
                        <div
                            className="w-full"
                        >
                            <button
                                className="p-4 w-full border-2 text-lg border-[var(--contrast-color)] text-[var(--contrast-color)] cursor-pointer"
                                >
                                Register
                            </button>
                            <button
                                className="p-4 w-full underline-offset-2 text-md underline cursor-pointer"
                                onClick={() => setIsLogin(prev => !prev)}
                            >
                                Login
                            </button>
                        </div>
                    </>
                ) : (
                    <div
                        className=""
                    >
                        <Asterisk 
                            size={128}
                            className="text-[var(--contrast-color)]"
                        />
                    </div>
                )
            }
        </div>
    )
}

export default Login;