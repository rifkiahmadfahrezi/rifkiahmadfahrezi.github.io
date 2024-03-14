import supabase from "@/API/supabase-client";

export async function fetchProjects(){
    try{
      
      let { data: projects, error } = await supabase
      .from('projects')
      .select('*')
        

     if(error){
      alert(error.message)
      throw error
     }
     return projects

    }catch(e){
      console.error(e)
    }
} 