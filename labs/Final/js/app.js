fetch("data/data.json")
.then(response => response.json())
.then(data => BossData.reveal(data));