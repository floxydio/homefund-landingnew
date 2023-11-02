import Link from "next/link"
import { todoData } from "./repo_todo"

interface TodoData {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}



export default async function Page() {
    const data: TodoData[] = await todoData()

    return (
        <>
            {data && (
                <ul>
                    {data.map((todo) => (
                        <li key={todo.id}>{todo.title} - <Link href={"/todo/" + todo.id}>To Page Detail</Link></li>
                    ))}
                </ul>
            )}
        </>
    )
}