export const actions = {
  UPDATE_NAME: "update-name",
  UPDATE_SURNAME: "update-surname",
};

export function updateName(payload) {
  return {
    type: actions.UPDATE_NAME,
    payload,
  };
}

export function updateSurname(payload) {
  return {
    type: actions.UPDATE_SURNAME,
    payload,
  };
}
