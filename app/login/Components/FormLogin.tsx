export const FormLogin = () => {
    return (
        <>
            <div className="w-full flex justify-center items-center mt-10">
                <form className="grid grid--cols-2 gap-6 w-[40pc]">
                    <p className="ParentForm">
                        <label className="text-lg font-bold">Email</label>
                        <input type="text" className="InputForm"/>
                    </p>

                    <p className="ParentForm">
                        <label className="text-lg font-bold">password</label>
                        <input type="password" className="InputForm"/>
                    </p>

                    <p className="col-span-2 w-full flex justify-center">
                        <button className="BtnLogin">Login</button>
                    </p>
                </form>
            </div>
        </>
    )
}