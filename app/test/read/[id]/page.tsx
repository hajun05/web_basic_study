export default async function Read(props: { params: Promise<{ id: string }> })
{
    const { id } = await props.params;
    return (
    <>
    <h2>Read</h2>
    paramters : {id}
    </>
    )
}