export const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
}