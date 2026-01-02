import { useParams, Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import propertiesData from "../assets/properties(1).json";
import "./Property.css";

function Property() {
  const { id } = useParams();
  const property = propertiesData.properties.find(p => p.id === id);

  if (!property) {
    return <p className="not-found">Property not found</p>;
  }

  return (
    <div className="property-page">
      <Link to="/" className="back-link">← Back to Properties</Link>

      <div className="property-image">
        <img src={property.picture} alt={property.type} />
      </div>

      <h1>{property.type}</h1>
      <h2>£{property.price.toLocaleString()}</h2>

      <Tabs className="property-tabs">
        <TabList>
          <Tab>Property</Tab>
          <Tab>Floor Plan</Tab>
          <Tab>Map</Tab>
        </TabList>

        <TabPanel>
          <div className="property-info">
            <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
            <p><strong>Tenure:</strong> {property.tenure}</p>
            <p><strong>Location:</strong> {property.location}</p>

            <p
              className="property-description"
              dangerouslySetInnerHTML={{ __html: property.description }}
            />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="floor-plan">
            <img
              src={property.picture}
              alt="Floor Plan"
              className="floor-plan-img"
            />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="map-container">
            <iframe
              title="map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                property.location
              )}&output=embed`}
              loading="lazy"
            />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Property;