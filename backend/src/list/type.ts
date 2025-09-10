export interface ListItems {
    "data": ListProps[]
}

type ListProps = {
    id: number,
    title: string,
    subtitle: string,
    description: string | null,
    created_at: string,
    updated_at: string,
    user_id: number
}