import React, {useState} from 'react'


const Transaction = () => {
    const [amount, setAmount] = useState();
    const [address, setAddress] = useState("");

    const postData = async()=>{

        const res = await fetch(
            "https://sharepe-ai-default-rtdb.firebaseio.com/sharepeAiform.json",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    amount: {amount},
                    WalletAddress: {address}
                }),
            }
        );
        console.log(res)
    }

    

    const onSubmit = ()=>{
        if(address.length===0){
            window.alert("*Wallet address filed can not be empty");
        }
        else if(address[0]!=='0'){
            window.alert("*Wallet address should start with 0x");
        }
        else if(address.length===1 || address[1]!=='x'){
            window.alert("*Wallet address should start with 0x");
        }
        else if(address.length!==42){
            window.alert("*Please enter the correct Wallet address. Wallet address length should be 42");
        }
        else if(amount===""){
            window.alert("*Amount filed can be empty");
        }
        else if(amount<0 || amount>10000){
            window.alert("*Please enter the number between the range 0-10000");
        }
        else{
            postData();
            window.alert("Your data is saved");
            setAddress("");
            setAmount("");
        }
        
    }

  return (
    <div className='mt-8 border-2 mx-3 lg:w-1/2 lg:mx-auto '>
        <form action="" className='text-white font-[600] ml-3 mt-5 mb-5'>
            Wallet Address: 
            <br className='lg:hidden'/>
            <input type="text" className='bg-gray-50 w-5/6 lg:w-1/2 lg:ml-5 active:bg-gray-100 text-black px-1' placeholder='Write in Ethereum address format' value={address} onChange={((e)=>{setAddress(e.target.value)})}/>
            <br />
            {/* {showAddressMessage} */}
            <br/><br/>
            Amount: <br className='lg:hidden'/> <input type='number' className='bg-gray-50 w-5/6 lg:w-1/2 lg:ml-16 active:bg-gray-100 text-black px-1' value={amount} onChange={((e)=>{setAmount(e.target.value)})} placeholder='0-10,000'/>
            <br />
            {/* {showAmountMessage} */}
            <br /><br />
            <button type='button' className='bg-green-500 px-3 py-1 text-white rounded-lg' onClick={(()=>{onSubmit(); return(false)})}>Submit</button>
        </form>
    </div>
  )
}

export default Transaction