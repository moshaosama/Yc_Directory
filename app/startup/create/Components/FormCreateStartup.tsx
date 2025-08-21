export default function FormCreateStartup () {
    return (
        <>
            <div className="flex w-full justify-center mt-10">
                <form
                    className="grid grid-cols-2 gap-6 w-[40%]"

                >
                    <p className="ParentForm">
                        <label className="text-lg font-bold">Title</label>
                        <input
                            type="text"
                            placeholder={"Startup Title"}
                            className="InputForm"

                        />
                    </p>

                    <p className="ParentForm">
                        <label className="text-lg font-bold">Description</label>
                        <textarea

                            className="InputForm h-24"
                            placeholder={"Startup Description"}
                        />
                    </p>

                    <p className="ParentForm">
                        <label className="text-lg font-bold">Category</label>
                        <input
                            type="text"
                            className="InputForm"
                            placeholder={"Startup Category (Tech, Education, Health, etc..)"}
                        />
                    </p>

                    <p className="ParentForm">
                        <label className="text-lg font-bold">Image URL</label>
                        <input
                            type="text"
                            className="InputForm"
                            placeholder={"Startup Image URL"}
                        />
                    </p>


                    <p className="col-span-2 w-full flex justify-center">
                        <button type="submit" className="BtnLogin">
                            Login
                        </button>
                    </p>
                </form>
            </div>
        </>
    )
}