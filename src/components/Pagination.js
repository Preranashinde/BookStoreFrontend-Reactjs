import React, { Component } from 'react';

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pager: {},
            initialPage: 1,
        };

        if (this.props.items && this.props.items.length) {
            this.setPage(this.state.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        if (this.props.items !== prevProps.items) {
            this.setPage(this.state.initialPage);
        }
    }

    setPage(page) {
        var items = this.props.items;
        var pager = this.state.pager;
        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        pager = this.getPager(items.length, page);

        // get new page of items from items array
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        // update state
        this.setState({
            pager: pager
        });

        // call change page function in parent component
        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 8;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }

        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        var pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <div style={{ marginLeft: '320px' }}>
                <div className="pagination">
                    <button className="page-button-view1" onClick={() => this.setPage(1)}>First</button>
                    <button className="page-button-view1" onClick={() => this.setPage(pager.currentPage - 1)} >Previous</button>
                    {pager.pages.map((page) =>
                        <button className="page-button-view" onClick={() => this.setPage(page)}>{page}</button>
                    )}
                    <button className="page-button-view1" onClick={() => this.setPage(pager.currentPage + 1)}>Next</button>
                    <button className="page-button-view1" onClick={() => this.setPage(pager.totalPages)}>Last</button>
                </div>
            </div>
        );
    }
}

export default Pagination