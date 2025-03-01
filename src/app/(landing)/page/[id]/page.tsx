interface IProps{
    params:{id:string},
  
}

const Page = ({params}:IProps) => {

    return(
    <>
        <h1>{params.id})</h1>
    </>
)
}

export default Page