export async function create(data) {

    data.createdAt = new Date();
    return data;
    
}