import { useState } from "react";


function IssueForm({ addIssue }) {

    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    const [priority,setPriority] = useState("LOW");


    function handleSubmit(e){

        e.preventDefault();


        if(title.trim()===""){
            alert("Title is required");
            return;
        }


        const newIssue = {

            id: crypto.randomUUID(),

            title,

            description,

            priority,

            status:"OPEN",

            timestamp:new Date().toISOString()

        };


        addIssue(newIssue);


        setTitle("");
        setDescription("");
        setPriority("LOW");

    }


    return (

        <form className="issue-form" onSubmit={handleSubmit}>

            <input
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            placeholder="Issue title"
            />


            <textarea

            value={description}

            onChange={(e)=>setDescription(e.target.value)}

            placeholder="Description"

            />

            <div className="form-row">

                <select

                value={priority}

                onChange={(e)=>setPriority(e.target.value)}

                >

                    <option>LOW</option>
                    <option>MEDIUM</option>
                    <option>HIGH</option>

                </select>


                <button>
                    Add Issue
                </button>

            </div>

        </form>

    )

}

export default IssueForm;