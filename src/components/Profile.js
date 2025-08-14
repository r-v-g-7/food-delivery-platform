import { useContext } from "react";
import { ProfileDataContext } from "../App";

const Profile = () => {
  const { profileData } = useContext(ProfileDataContext);
  
  if (!profileData) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingSpinner}></div>
        <p style={styles.loadingText}>Loading your profile...</p>
      </div>
    );
  }

  const { 
    name, 
    login, 
    avatar_url, 
    bio, 
    html_url, 
    created_at, 
    public_repos, 
    followers, 
    following,
    location,
    company 
  } = profileData;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short'
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header Section */}
        <div style={styles.headerSection}>
          <div style={styles.avatarContainer}>
            <img src={avatar_url} alt={name} style={styles.avatar} />
            <div style={styles.memberBadge}>⭐</div>
          </div>
          <div style={styles.userInfo}>
            <h1 style={styles.name}>{name || login}</h1>
            <p style={styles.username}>@{login}</p>
            <div style={styles.membershipInfo}>
              <span style={styles.memberTag}>🎖️ Gold Member</span>
              <span style={styles.joinDate}>Since {formatDate(created_at)}</span>
            </div>
          </div>
        </div>

        {/* Quick Stats Row */}
        <div style={styles.quickStats}>
          <div style={styles.quickStatItem}>
            <span style={styles.statIcon}>🍕</span>
            <div>
              <span style={styles.quickStatNumber}>{public_repos}</span>
              <span style={styles.quickStatLabel}>Orders</span>
            </div>
          </div>
          <div style={styles.quickStatItem}>
            <span style={styles.statIcon}>❤️</span>
            <div>
              <span style={styles.quickStatNumber}>{followers}</span>
              <span style={styles.quickStatLabel}>Favorites</span>
            </div>
          </div>
          <div style={styles.quickStatItem}>
            <span style={styles.statIcon}>⭐</span>
            <div>
              <span style={styles.quickStatNumber}>4.8</span>
              <span style={styles.quickStatLabel}>Rating</span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div style={styles.contentGrid}>
          {/* Left Column */}
          <div style={styles.leftColumn}>
            {bio && (
              <div style={styles.aboutSection}>
                <h3 style={styles.sectionTitle}>About Me</h3>
                <p style={styles.bio}>{bio}</p>
              </div>
            )}
            
            <div style={styles.preferencesSection}>
              <h3 style={styles.sectionTitle}>Food Preferences</h3>
              <div style={styles.preferencesTags}>
                <span style={styles.tag}>🌶️ Spicy</span>
                <span style={styles.tag}>🥗 Healthy</span>
                <span style={styles.tag}>🍕 Fast Food</span>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div style={styles.rightColumn}>
            <div style={styles.deliveryInfo}>
              <h3 style={styles.sectionTitle}>Delivery Info</h3>
              {location && (
                <div style={styles.infoRow}>
                  <span style={styles.infoIcon}>📍</span>
                  <span style={styles.infoText}>{location}</span>
                </div>
              )}
              <div style={styles.infoRow}>
                <span style={styles.infoIcon}>🚚</span>
                <span style={styles.infoText}>Free delivery available</span>
              </div>
              <div style={styles.infoRow}>
                <span style={styles.infoIcon}>⏰</span>
                <span style={styles.infoText}>Usually orders in evening</span>
              </div>
            </div>

            <div style={styles.recentActivity}>
              <h3 style={styles.sectionTitle}>Recent Activity</h3>
              <div style={styles.activityItem}>
                <span>🍔</span>
                <span>Ordered from Burger Palace</span>
                <span style={styles.activityTime}>2h ago</span>
              </div>
              <div style={styles.activityItem}>
                <span>⭐</span>
                <span>Rated "Pizza Corner" 5 stars</span>
                <span style={styles.activityTime}>1d ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div style={styles.actionSection}>
          <a 
            href={html_url} 
            target="_blank" 
            rel="noreferrer" 
            style={styles.profileButton}
          >
            <span style={styles.buttonIcon}>🍽️</span>
            View Full Profile
          </a>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
    background: "#f8f9fa", // Clean light grey background
    minHeight: "100vh",
    maxHeight: "100vh",
    overflow: "hidden",
  },
  
  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "#f8f9fa", // Clean light grey background
  },
  
  loadingSpinner: {
    width: "40px",
    height: "40px",
    border: "4px solid #e9ecef",
    borderTop: "4px solid #6c757d",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "16px",
  },
  
  loadingText: {
    color: "#6c757d",
    fontSize: "1rem",
    fontWeight: "500",
  },

  card: {
    background: "#ffffff", // Clean white card
    borderRadius: "16px",
    padding: "1.5rem",
    width: "100%",
    maxWidth: "900px",
    height: "90vh",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", // Subtle shadow
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    border: "1px solid #e9ecef", // Subtle border
  },

  headerSection: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
    paddingBottom: "1rem",
    borderBottom: "2px solid #f1f3f4", // Light grey border
  },

  avatarContainer: {
    position: "relative",
    marginRight: "1.5rem",
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #e9ecef", // Light grey border
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },

  memberBadge: {
    position: "absolute",
    top: "-5px",
    right: "-5px",
    width: "24px",
    height: "24px",
    backgroundColor: "#6c757d", // Neutral grey
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    border: "2px solid #fff",
  },

  userInfo: {
    flex: 1,
  },

  name: {
    margin: "0 0 4px 0",
    fontSize: "1.6rem",
    fontWeight: "700",
    color: "#2c3e50", // Dark grey
  },

  username: {
    color: "#6c757d", // Medium grey
    fontSize: "0.9rem",
    margin: "0 0 8px 0",
  },

  membershipInfo: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },

  memberTag: {
    backgroundColor: "#e9ecef", // Light grey
    color: "#495057", // Dark grey text
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "0.75rem",
    fontWeight: "600",
  },

  joinDate: {
    color: "#6c757d", // Medium grey
    fontSize: "0.8rem",
  },

  quickStats: {
    display: "flex",
    justifyContent: "space-around",
    padding: "1rem",
    backgroundColor: "#f8f9fa", // Very light grey
    borderRadius: "12px",
    marginBottom: "1.5rem",
    border: "1px solid #e9ecef",
  },

  quickStatItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  statIcon: {
    fontSize: "1.5rem",
  },

  quickStatNumber: {
    display: "block",
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#495057", // Dark grey
  },

  quickStatLabel: {
    display: "block",
    fontSize: "0.7rem",
    color: "#6c757d", // Medium grey
    textTransform: "uppercase",
  },

  contentGrid: {
    display: "flex",
    gap: "1.5rem",
    flex: 1,
    overflow: "hidden",
  },

  leftColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  rightColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },

  sectionTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#333", // Dark grey
    margin: "0 0 0.5rem 0",
    display: "flex",
    alignItems: "center",
  },

  aboutSection: {
    backgroundColor: "#f8f9fa", // Very light grey
    padding: "1rem",
    borderRadius: "8px",
    flex: 1,
    border: "1px solid #e9ecef",
  },

  bio: {
    fontSize: "0.85rem",
    color: "#555",
    lineHeight: "1.4",
    margin: "0",
  },

  preferencesSection: {
    backgroundColor: "#f8f9fa", // Very light grey
    padding: "1rem",
    borderRadius: "8px",
    border: "1px solid #e9ecef",
  },

  preferencesTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },

  tag: {
    backgroundColor: "#ffffff",
    color: "#495057", // Dark grey
    padding: "4px 8px",
    borderRadius: "16px",
    fontSize: "0.75rem",
    fontWeight: "600",
    border: "1px solid #e9ecef",
  },

  deliveryInfo: {
    backgroundColor: "#f8f9fa", // Very light grey
    padding: "1rem",
    borderRadius: "8px",
    border: "1px solid #e9ecef",
  },

  infoRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.5rem",
    fontSize: "0.8rem",
  },

  infoIcon: {
    marginRight: "8px",
    fontSize: "1rem",
  },

  infoText: {
    color: "#555",
  },

  recentActivity: {
    backgroundColor: "#f8f9fa", // Very light grey
    padding: "1rem",
    borderRadius: "8px",
    border: "1px solid #e9ecef",
    flex: 1,
  },

  activityItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "0.5rem",
    fontSize: "0.8rem",
    color: "#555",
  },

  activityTime: {
    color: "#999",
    marginLeft: "auto",
    fontSize: "0.7rem",
  },

  actionSection: {
    marginTop: "1rem",
    textAlign: "center",
  },

  profileButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    backgroundColor: "#495057", // Dark grey
    color: "#ffffff",
    borderRadius: "25px",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "600",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    border: "1px solid #343a40",
  },

  buttonIcon: {
    marginRight: "8px",
    fontSize: "1rem",
  },
};

// Add CSS keyframes
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .profile-button:hover {
    background-color: #343a40;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
  
  .avatar:hover {
    transform: scale(1.05);
  }
`;
document.head.appendChild(styleSheet);

export default Profile;
