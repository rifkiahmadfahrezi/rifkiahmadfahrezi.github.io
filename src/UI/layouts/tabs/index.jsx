import React, { useEffect,useState } from 'react'

import TabsContent from './TabsContent'
import { getProjects } from '@/data/projects'
import TabButtonContainer from '@/UI/fragments/tabs/TabButtonContainer'
import TabButton from '@/UI/fragments/tabs/TabButton'

export default function Tabs(){
        
    const [data, setData] = useState([])
    const [ langs, setLangs] = useState([])
    const [ activeTab, setActiveTab ] = useState('HTML')
    const [ isLoading, setIsLoading] = useState(true)
    
    function getAllProjects(tab){
        getProjects((status, response) => {
            
            if(status){
                const filteredData = response.filter(item => item.languange === tab).slice(0,4).sort()
                const rmDuplicate = response.filter((item, index, self) =>
                    !self.some((subItem, subIndex) =>
                    subItem.languange === item.languange && subIndex < index
                    )
                )
                const lang = rmDuplicate.map(item => item.languange)
                
                const randomDelayTime = Math.round(Math.random * 1500) + 500

                setLangs(lang)
                setData([])
                setTimeout(() => {
                    setData(filteredData)
                }, randomDelayTime)
                setIsLoading(false)
            }else{
                console.error(response)
            }
        })
    }

    useState(() => {
        if(data.length <= 0){
            setIsLoading(true)
        }else{
            setIsLoading(false)
        }
    }, [data])
    
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
                <TabButtonContainer>
                    {langs.length > 0 ? 
                        langs.map((item,i) => {
                            return (
                            <TabButton 
                                key={i} 
                                text={item} 
                                clickHandler={changeTabHandler}
                                activeTab={activeTab}/>
                            )
                        })
                    : null}
                </TabButtonContainer>
                
                <TabsContent data={data} isLoading={isLoading}/>
           </div>
           </>
        )
}