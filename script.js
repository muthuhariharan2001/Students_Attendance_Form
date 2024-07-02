document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const trainerName = document.getElementById('trainerName').value;
    const studentName = document.getElementById('studentName').value;
    const attendanceDate = document.getElementById('attendanceDate').value;
    const inTime = document.getElementById('inTime').value;
    const outTime = document.getElementById('outTime').value;
    const topics = document.getElementById('topics').value;
    const status = document.querySelector('input[name="status"]:checked').value;

    const formData = {
        trainerName,
        studentName,
        attendanceDate,
        inTime,
        outTime,
        topics,
        status
    };

    console.log('Form Data Submitted: ', formData);

    // Here you can handle the form data further, e.g., sending it to a server.
});
