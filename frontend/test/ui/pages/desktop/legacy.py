from selenium.webdriver.common.by import By

from pages.desktop.base import Base


class Legacy(Base):
    """Represents the Legacy page"""
    URL_TEMPLATE = '/legacy'
    _root_locator = (By.CLASS_NAME, 'layout-wrapper')
    _title_locator = (By.CSS_SELECTOR, ' h2')

    def wait_for_page_to_load(self):
        return self

    @property
    def title(self):
        return self.find_element(*self._title_locator).text
