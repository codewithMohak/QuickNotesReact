export const EventPropagation = () =>{
    const handleGrandParent =()=>{
        console.log("Grand Parent clicked");
    }

    const handleParentClick =() =>{
        console.log("Parent clicked ");
    }

    const handleChildClick =(event) =>{
        console.log(event);
        event.stopPropagation();
        console.log("Child clicked");
        
    }
    return(
        <>
        <section className="main-div">
            <div className="g-div mt-10 px-4 py-2 rounded bg-cyan-500 text-white" onClick={handleGrandParent}> 
                <div className="p-div mt-10 px-4 py-2 rounded bg-green-500 text-white" onClick={handleParentClick}>
                    <button className="c-div mt-10 px-4 py-2 rounded bg-red-500 text-white" onClick={handleChildClick}>
                        Child Div
                    </button>
                </div>
            </div>
        </section>
        </>
    )
}