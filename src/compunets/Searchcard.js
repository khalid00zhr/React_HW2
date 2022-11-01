import { Center, Input ,Text ,Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import Store from './Store'
import Data from './Data'
import arr from './Data'
function Searchcard() {
    const [filter,setFilter]= useState('');
    const data = arr.map();
    const searchText=()=>{
        if(filter === arr.name )
        alert( "is thier")
        else
        alert( "not fuond")
        
    }
    
    
    return (
    <div> 
        <Center>
       
<Input w={80} 
value={filter}
onChange={(e)=>{setFilter(e.target.value)}}
></Input>
<Button onClick={searchText}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  search
                </Button>
</Center>

   <Data/>
  
    </div>
  )
}

export default Searchcard