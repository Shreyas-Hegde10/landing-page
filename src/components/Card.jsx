function Card(props){
    return (
        <div className="flex flex-col max-w-4xl mx-auto px-4 sm:flex-row">
            <div className="bg-white border-b-4 border-pink-400 rounded-lg flex flex-col items-center">
                <div className="rounded-full text-indigo-600 bg-indigo-50">
                    <svg className="h-12 w-10 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={props.path} fill-rule="evenodd" clip-rule="evenodd"/></svg> 
                </div> 
                <h3 className="font-bold mt-4 mb-2">{props.title}</h3> 
                <p className="text-gray-500 text-sm leading-relaxed text-center mb-4">{props.description}</p>
            </div>
        </div>
    )
} 

export default Card;