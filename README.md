### Local Setup

1. [Install Bench](https://github.com/frappe/bench).
2. Install CRM app:
    ```sh
    $ bench get-app (https://github.com/roaa-mamdouh/CRM.git)
    ```
3. Create a site with the crm app:
    ```sh
    $ bench --site sitename.localhost install-app crm
    ```
4. Open the site in the browser:
    ```sh
    $ bench browse sitename.localhost --user Administrator
    ```
5. Access the crm page at `sitename.localhost:8000/crm` in your web browser.




