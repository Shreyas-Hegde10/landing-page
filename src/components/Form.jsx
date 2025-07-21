function Form(){
    return(
        <div className="flex flex-col items-center justify-center w-screen bg-slate-700 mt-12 border-t-4 border-slate-800">
            <div classname="text-center max-w-sm sm:max-w-lg">
                <h2 className="text-slate-200 font-bold m-10 text-center">Enter your details to receive an email about Tailwind CSS!</h2>
                <form className="flex flex-col items-center gap-4"> 
                    <div className="flex flex-col w-full sm:flex-row gap-4">
                        <input type="text" id="fname" placeholder="First Name" name="fname" className="bg-slate-600 text-slate-300 border-2 border-slate-500 rounded-lg w-full py-2 px-4" />
                        <input type="text" id="lname" placeholder="Last Name" name="lname" className="bg-slate-600 text-slate-300 border-2 border-slate-500 rounded-lg w-full py-2 px-4" />
                    </div>
                    <div className="flex flex-col w-full sm:flex-row gap-4">
                        <input type="email" id="email" placeholder="john@email.com" name="email" className="bg-slate-600 text-slate-300 border-2 border-slate-500 rounded-lg w-full py-2 px-4" />
                        <input type="text" id="title" placeholder="Your title" name="title" className="bg-slate-600 text-slate-300 border-2 border-slate-500 rounded-lg w-full py-2 px-4" />
                    </div>
                    <button className="bg-blue-500 text-white text-center text-sm p-2 rounded-lg cursor-pointer w-full mt-1 mb-2">Submit</button>
                </form> 
            </div>
        </div>
    )
}

export default Form;