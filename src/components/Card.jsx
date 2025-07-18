function Card(props){
    return (
            <div className="bg-white border-b-4 border-pink-400 rounded-lg flex flex-col items-center p-6 flex-1 min-w-0">
                <div className="rounded-full text-indigo-600 bg-indigo-50 p-2">
                    <svg className="h-12 w-12 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d={props.path} fillRule="evenodd" clipRule="evenodd"/></svg> 
                </div> 
                <h3 className="font-bold mt-4 max-w-80 mb-5 text-center sm:mb-6 sm:whitespace-nowrap">{props.title}</h3> 
                <p className="text-gray-500 text-sm leading-relaxed text-center mb-4">{props.description}</p>
            </div>
    )
} 

export default Card;