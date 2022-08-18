export const getExampleTasks = async () => {
    const response = await fetch("/Todo-list-react/expampleTasks.json")

    if (!response.ok) {
        new Error(response.statusText)
    }

    return await response.json()
}