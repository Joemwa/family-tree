import React, { useState } from "react";
import familyData from "./familyData";
import "./FamilyViewer.css";

const FamilyViewer = ({ rootId }) => {
  const [history, setHistory] = useState([rootId]); // ✅ keep track of visited nodes
  const currentRootId = history[history.length - 1];

  const getPerson = (id) => familyData.find((p) => p.id === id);

  const goToChild = (childId) => {
    setHistory([...history, childId]); // ✅ push child to history
  };

  const goBack = () => {
    if (history.length > 1) {
      setHistory(history.slice(0, -1)); // ✅ remove last element
    }
  };

  const renderFamilyTree = (personId) => {
    const person = getPerson(personId);
    if (!person) return null;

    // Normalize spouses
    const spouseIdsArray = Array.isArray(person.spouseId)
      ? person.spouseId
      : person.spouseId
      ? [person.spouseId]
      : [];
    const spouses = spouseIdsArray.map(getPerson).filter(Boolean);

    // Normalize children
    const childrenIdsArray = Array.isArray(person.childrenIds)
      ? person.childrenIds
      : person.childrenIds
      ? [person.childrenIds]
      : [];
    const children = childrenIdsArray.map(getPerson).filter(Boolean);

    return (
      <div key={person.id} className="family-member">
        <div className="avatar" />
        <p className="name">{person.name}</p>
        <p className="surname">{person.surname}</p>
        <p>DOB: {person.dateOfBirth}</p>

        <div>
          <h4>Spouse:</h4>
          {spouses.length > 0 ? (
            spouses.map((spouse) => (
              <div key={spouse.id}>
                <div className="avatar spouse-avatar" />
                <p>
                  {spouse.name} {spouse.surname}
                </p>
              </div>
            ))
          ) : (
            <p>No spouses listed</p>
          )}
        </div>

        {children.length > 0 && (
          <div>
            <h3>Children</h3>
            <div className="children">
              {children.map((child) => (
                <button
                  key={child.id}
                  className="child-button"
                  onClick={() => goToChild(child.id)}
                >
                  {child.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="family-container">
      {/* ✅ Back button */}
      {history.length > 1 && (
        <button className="back-button" onClick={goBack}>
          ⬅ Home
        </button>
      )}
      {renderFamilyTree(currentRootId)}
    </div>
  );
};

export default FamilyViewer;
