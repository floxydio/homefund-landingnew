import { fetchTodoByDetail } from "../repo_todo"

export default async function Page({ params }: { params: { id: number } }) {
    const data = await fetchTodoByDetail(params.id)


    return <>
        <p>{data.title}</p>

    </>
}