export const showCurrentContacts = (filter, contacts) => {
  if (!filter) {
    return contacts;
  };
  const adjustedFilter = filter.toLocaleLowerCase();
  
  const currentContacts = contacts.filter(({ name }) =>
    name.toLocaleLowerCase().includes(adjustedFilter));

  return currentContacts;
};