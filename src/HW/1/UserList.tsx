export type AddressType = {
    street: string; // ПОДПРАВЛЯЕМ any
    city: string; // ПОДПРАВЛЯЕМ any
};

export type UserType = { // ПРИДЕТСЯ САМОМУ)
    id: number
    name: string
    age: number
    address: any
};

export type UserListPropsType = {
    users: Array<UserType>; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = (props: UserListPropsType) => {
    return (
        <div id={'hw01-users'}>
            <h2>User List:</h2>

            <ul>
                {props.users.map((objectFromUsersArray) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
                    <li key={objectFromUsersArray.id} id={`hw01-user-${objectFromUsersArray.id}`}>
                        <strong>{objectFromUsersArray.name}</strong> (Age: {objectFromUsersArray.age})<strong> Address:</strong>
                        {objectFromUsersArray.address.street}, {objectFromUsersArray.address.city}
                    </li>
                ))}
            </ul>
        </div>
    );
};
