export async function todoData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await res.json()
    return data
}

export async function fetchTodoByDetail(id: number) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await res.json()
    return data
} 