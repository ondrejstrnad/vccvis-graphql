import { Person } from "./models/Person";

export const getPeople = async (clb: React.Dispatch<React.SetStateAction<Person[] | undefined>>) => {
    return fetch("people")
        .then((res) => res.json())
        .then((people) => clb(people));
}

export const getPeopleGraphQL = async (clb: React.Dispatch<React.SetStateAction<Person[] | undefined>>) => {
    var query = `{
        people {
          _id
          position
          firstname
          lastname
          fullname       
          publications {
            title
            authors
          }
        }
      }`;
    
    var encodeduri = encodeURIComponent(query);  
      
    return fetch("graphql?query=" + encodeduri)
        .then((res) => res.json())
        .then((people) => clb(people.data.people));
}
