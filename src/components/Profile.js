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

          {/* Quick Stats moved to header for horizontal space */}
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
        </div>

        {/* Main Content Grid - Now 3 columns */}
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

          {/* Middle Column */}
          <div style={styles.middleColumn}>
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
          </div>

          {/* Right Column */}
          <div style={styles.rightColumn}>
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
              <div style={styles.activityItem}>
                <span>🎯</span>
                <span>Achieved "Foodie" badge</span>
                <span style={styles.activityTime}>3d ago</span>
              </div>
            </div>

            {/* Action Button moved to right column */}
            <div style={styles.actionSection}>
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                style={styles.profileButton}
                className="profile-button"
              >
                <span style={styles.buttonIcon}>🍽️</span>
                View Full Profile
              </a>
            </div>
          </div>
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
    padding: "1rem 2rem",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    minHeight: "100vh",
    maxHeight: "100vh",
    overflow: "hidden",
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },

  loadingContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },

  loadingSpinner: {
    width: "48px",
    height: "48px",
    border: "4px solid rgba(255, 255, 255, 0.2)",
    borderTop: "4px solid #ffffff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "20px",
  },

  loadingText: {
    color: "#ffffff",
    fontSize: "1.1rem",
    fontWeight: "500",
    letterSpacing: "0.5px",
  },

  card: {
    background: "#ffffff",
    borderRadius: "24px",
    padding: "1.5rem 2rem",
    width: "100%",
    maxWidth: "95vw",
    height: "auto",
    maxHeight: "90vh",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.05)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backdropFilter: "blur(10px)",
  },

  headerSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "1.5rem",
    paddingBottom: "1rem",
    borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
    gap: "2rem",
  },

  avatarContainer: {
    position: "relative",
    flexShrink: 0,
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "4px solid #ffffff",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  memberBadge: {
    position: "absolute",
    top: "-6px",
    right: "-6px",
    width: "28px",
    height: "28px",
    background: "linear-gradient(135deg, #ffd89b 0%, #19547b 100%)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    border: "3px solid #ffffff",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
  },

  userInfo: {
    flex: 1,
    minWidth: 0,
  },

  name: {
    margin: "0 0 4px 0",
    fontSize: "1.8rem",
    fontWeight: "700",
    color: "#1a202c",
    letterSpacing: "-0.025em",
    lineHeight: "1.2",
  },

  username: {
    color: "#718096",
    fontSize: "0.9rem",
    margin: "0 0 8px 0",
    fontWeight: "500",
  },

  membershipInfo: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    flexWrap: "wrap",
  },

  memberTag: {
    background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    color: "#744210",
    padding: "6px 12px",
    borderRadius: "16px",
    fontSize: "0.75rem",
    fontWeight: "600",
    letterSpacing: "0.025em",
    boxShadow: "0 2px 8px rgba(252, 182, 159, 0.3)",
  },

  joinDate: {
    color: "#a0aec0",
    fontSize: "0.8rem",
    fontWeight: "500",
  },

  quickStats: {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center",
    flexShrink: 0,
  },

  quickStatItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "0.5rem 1rem",
    background: "linear-gradient(135deg, #f7fafc 0%, #edf2f7 100%)",
    borderRadius: "12px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
  },

  statIcon: {
    fontSize: "1.5rem",
    filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))",
  },

  quickStatNumber: {
    display: "block",
    fontSize: "1.2rem",
    fontWeight: "800",
    color: "#2d3748",
    lineHeight: "1",
  },

  quickStatLabel: {
    display: "block",
    fontSize: "0.7rem",
    color: "#a0aec0",
    textTransform: "uppercase",
    fontWeight: "600",
    letterSpacing: "0.1em",
    marginTop: "2px",
  },

  contentGrid: {
    display: "flex",
    gap: "1.5rem",
    flex: 1,
    overflow: "hidden",
    minHeight: 0,
  },

  leftColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    minWidth: "280px",
  },

  middleColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    minWidth: "280px",
  },

  rightColumn: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    minWidth: "280px",
  },

  sectionTitle: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#2d3748",
    margin: "0 0 0.75rem 0",
    letterSpacing: "-0.025em",
  },

  aboutSection: {
    background: "linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)",
    padding: "1.25rem",
    borderRadius: "16px",
    flex: 1,
    border: "1px solid rgba(0, 0, 0, 0.05)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    minHeight: 0,
  },

  bio: {
    fontSize: "0.9rem",
    color: "#4a5568",
    lineHeight: "1.5",
    margin: "0",
    fontWeight: "400",
  },

  preferencesSection: {
    background: "linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)",
    padding: "1.25rem",
    borderRadius: "16px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },

  preferencesTags: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },

  tag: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#ffffff",
    padding: "6px 12px",
    borderRadius: "16px",
    fontSize: "0.8rem",
    fontWeight: "600",
    letterSpacing: "0.025em",
    boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
    transition: "all 0.2s ease",
  },

  deliveryInfo: {
    background: "linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)",
    padding: "1.25rem",
    borderRadius: "16px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    flex: 1,
  },

  infoRow: {
    display: "flex",
    alignItems: "center",
    marginBottom: "0.75rem",
    fontSize: "0.85rem",
  },

  infoIcon: {
    marginRight: "10px",
    fontSize: "1rem",
  },

  infoText: {
    color: "#4a5568",
    fontWeight: "500",
  },

  recentActivity: {
    background: "linear-gradient(135deg, #ffffff 0%, #f7fafc 100%)",
    padding: "1.25rem",
    borderRadius: "16px",
    border: "1px solid rgba(0, 0, 0, 0.05)",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    flex: 1,
  },

  activityItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "0.75rem",
    fontSize: "0.85rem",
    color: "#4a5568",
    fontWeight: "500",
  },

  activityTime: {
    color: "#a0aec0",
    marginLeft: "auto",
    fontSize: "0.75rem",
    fontWeight: "500",
  },

  actionSection: {
    textAlign: "center",
  },

  profileButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "12px 24px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#ffffff",
    borderRadius: "25px",
    textDecoration: "none",
    fontSize: "0.9rem",
    fontWeight: "600",
    letterSpacing: "0.025em",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    boxShadow: "0 8px 20px rgba(102, 126, 234, 0.3), 0 4px 8px rgba(0, 0, 0, 0.15)",
    border: "none",
    cursor: "pointer",
    width: "100%",
  },

  buttonIcon: {
    marginRight: "8px",
    fontSize: "1rem",
  },
};

// Enhanced CSS animations and hover effects
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .profile-button:hover {
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 12px 28px rgba(102, 126, 234, 0.4), 0 8px 16px rgba(0, 0, 0, 0.2);
    background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
  }
  
  .profile-button:active {
    transform: translateY(-1px) scale(1.01);
  }
`;
document.head.appendChild(styleSheet);

export default Profile;
