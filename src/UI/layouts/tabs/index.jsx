import React, { useEffect,useState } from 'react'

import TabsContent from './TabsContent'
import { getProjects } from '@/data/projects'
import TabButtonContainer from '@/UI/fragments/tabs/TabButtonContainer'
import TabButton from '@/UI/fragments/tabs/TabButton'
import axios from 'axios'

export default function Tabs(){
        
    const [data, setData] = useState([])
    const [ activeTab, setActiveTab ] = useState('HTML')
    const [ isLoading, setIsLoading] = useState(true)
    
    async function getAllProjects(tab){
        try{
            const response = await axios.get(`https://my-json-server.typicode.com/rifkiahmadfahrezi/rifkiahmadfahrezi.github.io/db`)
            const data = response.data

            const { projects } = data

            if(response.status === 200){
                // console.log(projects)
                // const filteredData = projects.filter(item => item.languange === tab).slice(0,4).sort()
                // setData(filteredData)

                setData(projects)
                
                setIsLoading(false)
            }
            
        }catch(error){
            setIsLoading(false)
            console.error(error)
        }
    }
    
    useEffect(() => {
        getAllProjects(activeTab)
    }, [activeTab])

    function changeTabHandler(e){
        const tab = e.target.dataset.lang
        setActiveTab(tab)
    }

        return(
            <>
            <div className="w-full">
                {/* <TabButtonContainer>
                    {data?.length > 0 ? 
                        data.map((item,i) => {
                            return (
                            <TabButton 
                                key={i} 
                                text={item.languange} 
                                clickHandler={changeTabHandler}
                                activeTab={activeTab}/>
                            )
                        })
                    : null}
                </TabButtonContainer> */}
                
                <TabsContent data={data} isLoading={isLoading}/>
           </div>
           </>
        )
}