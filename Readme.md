Api accessible [here](http://34.245.192.86:3000/api/airports)

For deployment should be created MySQL database and run scripts:

```
CREATE TABLE airports (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(255),
	city VARCHAR(255),
	country VARCHAR(255),
	iata VARCHAR(255),
	icao VARCHAR(255),
	x FLOAT8,
	y FLOAT8,
	elevation VARCHAR(255),
	timezone VARCHAR(255),
	dst VARCHAR(255),
	tz_id VARCHAR(255)
)

LOAD DATA LOCAL 
    INFILE '/path/to/airports.dat'
    REPLACE INTO TABLE airports.airports
    FIELDS ESCAPED BY '\"'
    TERMINATED BY ','
    OPTIONALLY ENCLOSED BY '\"'
    LINES TERMINATED BY '\n'
    (`id`, `name`, `city`, `country`, `iata`, `icao`, `y`, `x`, `elevation`, `timezone`, `dst`, `tz_id`, `type`, `source`);
```

.env file should be created with values:
```
SQLHOST=
SQLUSER=
SQLPASS=
SQLDB=
```
For production:
* Implements metrics and health check
* Add API documentation
* Add e2e testing 