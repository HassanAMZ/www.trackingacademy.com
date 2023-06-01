import Link from "next/link";

export default async function NewsletterForm() {
 async function getGfFormFromID(id) {
  const wp_url = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

  let res = await fetch(wp_url, {
   method: "POST",
   headers: {
    "Content-Type": "application/json",
   },
   body: JSON.stringify({
    query: `
        query getGfFormFromID {
            gfForm(id: ${id}, idType: DATABASE_ID) {
            id
            title
            description
            formFields(first: 500) {
                nodes {
                ... on TextField {
                    id
                    type
                    label
                }
                ... on SelectField {
                    id
                    type
                    label
                    choices {
                    text
                    value
                    }
                }
                ... on EmailField {
                    id
                    type
                    label
                }
                ... on MultiSelectField {
                    id
                    type
                    label
                }
                }
            }
            }
        }`,
    variables: {},
   }),
  });

  const json = await res.json();
  if (json.errors) {
   console.error(json.errors);
   throw new Error("Failed to fetch API");
  }
  return json.data.gfForm;
 }
 const gfFormData = await getGfFormFromID(1);
 const gformFields = gfFormData.formFields.nodes.map((formField, index) => {
  return <h1 key={index}>{formField.label}</h1>;
 });
 console.log(gfFormData.formFields.nodes);
 return (
  <form id={gfFormData.id}>
   <h2>{gfFormData.title}</h2>
   <p> {gfFormData.description}</p>
   <>{gformFields}</>
   <button type='submit'>Submit</button>
  </form>
 );
}
