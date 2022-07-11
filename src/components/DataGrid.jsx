import { useFetchData } from "../hooks/useFetchData"
import { DataItem } from "./DataItem"

export const DataGrid = () => {

    const { data, isLoading } = useFetchData()


    return (
        <>

            {
                isLoading && (<h2>Cargando...</h2>)
            }
            

            <div className="card-grid">
                {
                    data.map( inf => (
                        <DataItem 
                            key={inf.id}
                            { ...inf }
                        />
                    ))
                }
                
            </div>

        </>
    )
}
