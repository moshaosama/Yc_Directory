"use client"

import {useForm} from "react-hook-form";
import {startUpService} from "@/Services/StartUp/StartupService";
export default function FormCreateStartup () {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const handleCreateStartUp = async (data: any) => {
        await startUpService.createData(data)
    }
    return (
        <>
            <div className="flex w-full justify-center mt-10">
                <form
                    className="grid grid-cols-2 gap-6 w-[40%]"
                    onSubmit={handleSubmit(handleCreateStartUp)}
                >
                    <p className="ParentForm">
                        <label className="text-lg font-bold">Title</label>
                        <input
                            type="text"
                            placeholder={"Startup Title"}
                            className="InputForm"
                            {...register("title", {required: true})}
                        />

                        {errors?.title && <p className="text-red-500 text-xl font-bold">Title is required</p>}
                    </p>

                    <p className="ParentForm">
                        <label className="text-lg font-bold">Description</label>
                        <textarea
                            className="InputForm h-24"
                            placeholder={"Startup Description"}
                            {...register("description", {required: true})}
                        />
                        {errors?.description && <p className="text-red-500 text-xl font-bold">Description is required</p>}
                    </p>

                    <p className="ParentForm">
                        <label className="text-lg font-bold">Category</label>
                        <input
                            type="text"
                            className="InputForm"
                            placeholder={"Startup Category (Tech, Education, Health, etc..)"}
                            {...register("category", {required: true})}
                        />
                        {errors?.category && <p className="text-red-500 text-xl font-bold">Category is required</p>}
                    </p>

                    <p className="ParentForm">
                        <label className="text-lg font-bold">Image URL</label>
                        <input
                            type="text"
                            className="InputForm"
                            placeholder={"Startup Image URL"}
                            {...register("image", {required: true})}
                        />

                        {errors?.image && <p className="text-red-500 text-xl font-bold">Image URL is required</p>}
                    </p>


                    <p className="col-span-2 w-full flex justify-center">
                        <button type="submit" className="BtnLogin">
                            Create
                        </button>
                    </p>
                </form>
            </div>
        </>
    )
}